# Web3

Simple command line tool for interacting with web3 enabled blockchains - GoChain, Ethereum, etc.
This repository also exports the backing golang `package web3`.

[![API Reference](
https://camo.githubusercontent.com/915b7be44ada53c290eb157634330494ebe3e30a/68747470733a2f2f676f646f632e6f72672f6769746875622e636f6d2f676f6c616e672f6764646f3f7374617475732e737667
)](https://godoc.org/github.com/gochain-io/web3)

Note: Some commands require [Docker](https://docs.docker.com/install/).

## Install web3

### a) One line install script

```sh
curl -LSs https://raw.githubusercontent.com/gochain-io/web3/mast
er/install.sh | sh
```

### b) I have the Go language installed

```sh
go install github.com/gochain-io/web3/cmd/web3
```

### c) Build from source

Clone the repo:

```sh
git clone https://github.com/gochain-io/web3
cd web3
make build
web3 help
```

## Quickstart

First, [get yourself some GO testnet tokens](https://help.gochain.io/en/article/getting-started-4tlo7a/) so you can deploy and interact with your contract. Or you can run a local GoChain node

Set `WEB3_PRIVATE_KEY` and `WEB3_NETWORK` env vars:

```sh
export WEB3_NETWORK=testnet
export WEB3_PRIVATE_KEY=0x...
```

Copy [contracts/hello.sol](contracts/hello.sol) into your current directory.

Then:

```sh
web3 contract build hello.sol
web3 contract deploy Hello.bin
```

This will return a contract address, copy it and use below.

Let's call a read function (which is free):

```sh
web3 contract call --address 0xCONTRACT_ADDRESS --abi Hello.abi --function hello
```

That should return: `[Hello World]`.

Now let's change the name:

```sh
web3 contract call --address 0xCONTRACT_ADDRESS --abi Hello.abi --function setName "Johnny"
```

And call the hello function again to see if the name changed:

```sh
web3 contract call --address 0xCONTRACT_ADDRESS --abi Hello.abi --function hello
```

Now it should return `[Hello Johnny]`

:boom:

### Troubleshooting

If it doesn't return Hello Johnny, you can check the logs and receipt with:

```sh
web3 rc TX_HASH
```

## Testing

To automate testing using web3 CLI, enable the JSON format flag with `--format json`. This will
return easily parseable results for your tests. Eg:

```sh
web3 --format json contract call --address 0xCONTRACT_ADDRESS --abi Hello.abi --function hello
```

And you'll get a JSON response like this:

```json
{
  "response": [
    "Hello",
    "World"
  ]
}
```

## List of available commands

### Global parameters

`$NETWORK as env variable or -network as command parameter` - the name of the network. Available networks are:

* mainnet (default)
* testnet
* ethereum
* ropsten
* localhost

`$RPC_URL as env variable or -rpc-url as command parameter` - The network RPC URL (ie http://localhost:8545)

`-verbose as command parameter` - Verbose logging

### Show information about a block

```sh
web3 block BLOCK_ID
```

**Parameters:**

- BLOCK_ID - id of a block (omit for `latest`)

### Show information about a transaction

```sh
web3 transaction TX_HASH
```

**Parameters:**

- TX_HASH - hash of a transaction

### Show information about an address

```sj
web3 transaction ADDRESS_HASH
```

**Parameters:**

- ADDRESS_HASH - hash of the address

### Build a smart contract

```sh
web3 contract build FILENAME.sol
```

**Parameters:**

- FILENAME - the name of the .sol file, eg: `hello.sol`

### Deploy a smart contract to a network

```sh
web3 contract deploy FILENAME.bin
```

**Parameters:**

- FILENAME - the name of the .bin file
- $WEB3_PRIVATE_KEY as env variable or -private-key as command parameter - the private key of the wallet

### Call the function of the deployed contract

```sh
web3 contract call --amount AMOUNT --address CONTRACT_ADDRESS --abi CONTRACT_ABI_FILE --function FUNCTION_NAME FUNCTION_PARAMETERS
```

**Parameters:**

- CONTRACT_ADDRESS - the address of the deployed contract
- CONTRACT_ABI_FILE - the abi file of the deployed contract
- FUNCTION_NAME - the name of the function you want to call
- FUNCTION_PARAMETERS - the list of the function parameters
- AMOUNT - amount of wei to be send with transaction (require only for paid transact functions)
- $WEB3_PRIVATE_KEY as env variable or -private-key as command parameter - the private key of the wallet

### The list of the functions from ABI

```sh
web3 contract list --abi CONTRACT_ABI_FILE
```

**Parameters:**

- CONTRACT_ABI_FILE - the abi file of the compiled contract
