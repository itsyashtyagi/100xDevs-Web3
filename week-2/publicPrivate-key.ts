
// EdDSA - Edwards-curve Digital Signature Algorithm  - ED25519 - Using @noble/ed25519

import * as ed from "@noble/ed25519";
import bs58 from "bs58";

async function main() {
     // Generate a secure random private key
     const privateKey = ed.utils.randomPrivateKey();
     // console.log(privateKey);

     // converting the private key into the base58
     const characterPrivateKey = bs58.encode(privateKey);
     console.log(`Private Key - ${characterPrivateKey}`);

     // Generate the public key from the private key
     const publickey = await ed.getPublicKeyAsync(privateKey);
     const characterPublicKey = bs58.encode(publickey);
     console.log(`Public Key - ${characterPublicKey}`);

     // Defining the message that has to be signed
     const textMessage = "Hello World";

     // Converting the text message to the UInt8Array
     const message = new TextEncoder().encode(textMessage);

     // Signing the message using the privateKey
     const signature = await ed.signAsync(message, privateKey);

     // Verifying the signed message using the public key
     const isValid = await ed.verifyAsync(signature, message, publickey);
     console.log(isValid);
}

main();

// EdDSA - Edwards-curve Digital Signature Algorithm  - ED25519 - Using @solana/web3.js

import { Keypair } from "@solana/web3.js";
import nacl from "tweetnacl";
import bs58 from "bs58";

// Generate the keypair

const keypair = Keypair.generate();

// Generating the public and private key (secret key)

const publicKey = keypair.publicKey.toString();
console.log(`Public Key - ${publicKey}`);

const privateKey = keypair.secretKey;
const characterPrivatekey = bs58.encode(privateKey);
console.log(characterPrivatekey);

// Convert the message into UInt8Array
const message = new TextEncoder().encode("Hello World");

// Signing the message using the private key
const signature = nacl.sign.detached(message, privateKey);
const result = nacl.sign.detached.verify(
  message,
  signature,
  keypair.publicKey.toBytes(),
);

console.log(result);


// 
