//  UInt8Array

const bytes = new Uint8Array([0, 255, 187, 89]);
// console.log(bytes);

let uint8Array = new Uint8Array([0, 255, 178, 65]);
uint8Array[1] = 300;
// console.log(uint8Array);

// Bytes to Ascii conversion

function bytesToAscii(byteArray){
    return byteArray.map(byte => String.fromCharCode(byte)).join("");
}

const bytesArray = [72, 101, 201, 255];
// console.log(bytesToAscii(bytesArray));

// converting the Ascii to bytes

function asciiToBytes(asciiString){
    const bytesArray = [];
    for(let i=0;i<asciiString.length; i++){
        bytesArray.push(asciiString.charCodeAt(i));
    }

    return bytesArray;
}

const asciiString = "Hello";
// console.log(asciiToBytes(asciiString));

// UInt8Array to Ascii
function uint8ArrayToAscii(unit8Value){
    return new TextDecoder().decode(unit8Value);
}

const uint8Value = new Uint8Array([ 72, 101, 108, 108, 111 ]);
// console.log(uint8ArrayToAscii(uint8Value)); 

// Ascii to UInt8Array
function asciiToUint8Array(asciiValue){
    return new Uint8Array([...asciiString].map(char => char.charCodeAt(0)));
}

const asciiValue = "Hello";
// console.log(asciiToUint8Array(asciiValue));
