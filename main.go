package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"math/big"
	"os"

	"github.com/gochain-io/gochain/core/types"
	"github.com/urfave/cli"
)

var verbose bool

func main() {
	var network, rpcUrl, function, contractAddress, privateKey string
	app := cli.NewApp()
	app.Name = "web3-cli"
	app.Version = "0.0.1"
	app.Usage = "web3 cli tool"
	app.Flags = []cli.Flag{
		cli.StringFlag{
			Name:        "network",
			Usage:       "The name of the network (testnet/mainnet/ethereum/ropsten/localhost)",
			Destination: &network,
			EnvVar:      "NETWORK",
			Hidden:      false},
		cli.StringFlag{
			Name:        "rpc-url",
			Usage:       "The network RPC URL",
			Destination: &rpcUrl,
			EnvVar:      "RPC_URL",
			Hidden:      false},
		cli.BoolFlag{
			Name:        "verbose",
			Usage:       "Enable verbose logging",
			Destination: &verbose,
			Hidden:      false},
	}
	app.Commands = []cli.Command{
		{
			Name:    "block",
			Usage:   "Show information about the block",
			Aliases: []string{"bl"},
			Action: func(c *cli.Context) {
				GetBlockDetails(network, rpcUrl, c.Args().First())
			},
		},
		{
			Name:    "transaction",
			Aliases: []string{"tx"},
			Usage:   "Show information about the transaction",
			Action: func(c *cli.Context) {
				GetTransactionDetails(network, rpcUrl, c.Args().First())
			},
		},
		{
			Name:    "address",
			Aliases: []string{"addr"},
			Usage:   "Show information about the address",
			Action: func(c *cli.Context) {
				GetAddressDetails(network, rpcUrl, c.Args().First())
			},
		},
		{
			Name:    "contract",
			Aliases: []string{"c"},
			Usage:   "actions with contracts",
			Subcommands: []cli.Command{
				{
					Name:  "build",
					Usage: "Build the specified contract",
					Action: func(c *cli.Context) {
						BuildSol(c.Args().First())
					},
				},
				{
					Name:  "deploy",
					Usage: "Build and deploy the specified contract to the network",
					Action: func(c *cli.Context) {
						DeploySol(network, rpcUrl, privateKey, c.Args().First())
					},
					Flags: []cli.Flag{
						cli.StringFlag{
							Name:        "private-key",
							Usage:       "The private key",
							EnvVar:      "PRIVATE_KEY",
							Destination: &privateKey,
							Hidden:      true},
					},
				},
				{
					Name:  "call",
					Usage: "Call the specified function of the contract",
					Action: func(c *cli.Context) {
						println("calling the function of the deployed contract")
						fmt.Println("calling the function of the deployed contract from:", network)
					},
					Flags: []cli.Flag{
						cli.StringFlag{
							Name:        "function",
							Usage:       "The name of the function to call",
							Destination: &function,
							Hidden:      false},
						cli.StringFlag{
							Name:        "contract",
							Destination: &contractAddress,
							Usage:       "The address of the deployed contract",
							Hidden:      false},
					},
				},
			},
		},
		{
			Name:    "snapshot",
			Aliases: []string{"sn"},
			Usage:   "Show the clique snapshot",
			Action: func(c *cli.Context) {
				GetSnapshot(network, rpcUrl)
			},
		},
	}
	app.Run(os.Args)
}

func getRPCURL(network, rpcURL string) string {

	if rpcURL != "" {
		if network != "" {
			log.Fatalf("Cannot set both rpcURL %q and network %q", rpcURL, network)
		}
	} else {
		switch network {
		case "testnet":
			rpcURL = "https://testnet-rpc.gochain.io"
		case "mainnet":
			rpcURL = "https://rpc.gochain.io"
		case "localhost":
			rpcURL = "http://localhost:8545"
		case "ethereum":
			rpcURL = "https://main-rpc.linkpool.io"
		case "ropsten":
			rpcURL = "https://ropsten-rpc.linkpool.io"
		default:
			log.Fatal("Unrecognized network:", network)
			return ""
		}
		if verbose {
			log.Println("Network:", network)
		}
	}
	if verbose {
		log.Println("RPC URL:", rpcURL)
	}
	return rpcURL
}
func parseBigInt(value string) (*big.Int, error) {
	if value == "" {
		return nil, nil
	}
	i := big.Int{}
	_, err := fmt.Sscan(value, &i)
	return &i, err
}

func GetBlockDetails(network, rpcURL, blockNumber string) {
	client := GetClient(getRPCURL(network, rpcURL))
	blockN, err := parseBigInt(blockNumber)
	if err != nil {
		log.Fatalf("block number must be integer %q: %v", blockNumber, err)
	}
	block, err := client.GetBlockByNumber(blockN)
	if err != nil {
		log.Fatalf("Cannot get block details from the network: %v", err)
	}
	if verbose {
		log.Println("Block details:")
	}
	fmt.Println(marshalJSON(block.Header()))
}

func GetTransactionDetails(network, rpcURL, txhash string) {
	client := GetClient(getRPCURL(network, rpcURL))
	tx, isPending, err := client.GetTransactionByHash(txhash)
	if err != nil {
		log.Fatalf("Cannot get transaction details from the network: %v", err)
	}
	if verbose {
		log.Println("Transaction details:")
	}
	type details struct {
		Transaction *types.Transaction
		Pending     bool
	}
	fmt.Println(marshalJSON(details{Transaction: tx, Pending: isPending}))
}

type addressDetails struct {
	Balance *big.Int
	Code    *string
}

func GetAddressDetails(network, rpcURL, addrHash string) {
	client := GetClient(getRPCURL(network, rpcURL))
	addr, err := client.GetBalance(addrHash, nil)
	if err != nil {
		log.Fatalf("Cannot get address balance from the network: %v", err)
	}
	code, err := client.GetCode(addrHash, nil)
	if err != nil {
		log.Fatalf("Cannot get address code from the network: %v", err)
	}
	if verbose {
		log.Println("Address details:")
	}
	ad := addressDetails{Balance: addr}
	if len(code) > 0 {
		sc := string(code)
		ad.Code = &sc
	}
	fmt.Println(marshalJSON(&ad))
}

func GetSnapshot(network, rpcUrl string) {
	client := GetClient(getRPCURL(network, rpcUrl))
	s, err := client.GetSnapshot()
	if err != nil {
		log.Fatalf("Cannot get snapshot from the network: %v", err)
	}
	if verbose {
		log.Println("Snapshot details:")
	}
	fmt.Println(marshalJSON(s))
}

func BuildSol(filename string) {
	b, err := ioutil.ReadFile(filename)
	if err != nil {
		log.Fatalf("Failed to read file %q: %v", filename, err)
	}
	str := string(b) // convert content to a 'string'
	if verbose {
		log.Println("Building Sol:", str)
	}
	compileData, err := CompileSolidityString(str)
	if err != nil {
		log.Fatalf("Failed to compile %q: %v", filename, err)
	}
	if verbose {
		log.Println("Compiled Sol Details:", marshalJSON(compileData))
	}

	for contractName, v := range compileData {
		filename := contractName[8:]
		err := ioutil.WriteFile(filename+".bin", []byte(v.RuntimeCode), 0600)
		if err != nil {
			log.Fatalf("Cannot write the bin file: %v", err)
		}
		err = ioutil.WriteFile(filename+".abi", []byte(marshalJSON(v.Info.AbiDefinition)), 0600)
		if err != nil {
			log.Fatalf("Cannot write the abi file: %v", err)
		}
		fmt.Println("Contract has been successfully compiled and the following files have been written:", filename+".bin,", filename+".abi")
	}
}

func DeploySol(network, rpcUrl, privateKey, contractName string) {
	client := GetClient(getRPCURL(network, rpcUrl))
	if _, err := os.Stat(contractName); os.IsNotExist(err) {
		log.Fatalf("Cannot find the bin file: %v", err)
	}
	dat, err := ioutil.ReadFile(contractName)
	if err != nil {
		log.Fatalf("Cannot read the bin file: %v", err)
	}
	tx, err := client.DeployContract(privateKey, string(dat))
	if err != nil {
		log.Fatalf("Cannot deploy the contract: %v", err)
	}
	receipt, err := client.WaitForReceipt(tx)
	if err != nil {
		log.Fatalf("Cannot get the receipt: %v", err)
	}
	fmt.Println("Contract has been successfully deployed with transaction:", tx.Hash().Hex())
	fmt.Println("Contract address is:", receipt.ContractAddress.Hex())
}

func marshalJSON(data interface{}) string {
	b, err := json.MarshalIndent(data, "", "  ")
	if err != nil {
		log.Fatalf("Cannot marshal json: %v", err)
	}
	return string(b)
}
