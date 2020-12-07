import request from "umi-request";
import { message } from "antd";
const { sidecarURL, sidecarURLKrypton } = require('@/services/constants')
const stacks_blockchain_api_base_url = sidecarURLKrypton

export async function getStxFaucet(stxAddress: string) {
    const baseUrl = `${stacks_blockchain_api_base_url}/v1/faucets/stx/`;
    message.info("Get STX Faucet Successfully")
    return request(`${baseUrl}`, {
      method: "POST",
      data: {
        address: stxAddress
      }
    });
    
}

export async function getBtcFaucet(btcAddress: string) {
    const baseUrl = `${stacks_blockchain_api_base_url}/v1/faucets/btc/`;
    message.info("Get BTC Faucet Successfully")
    return request(`${baseUrl}`, {
        method: "POST",
        data: {
            address: btcAddress
        }
    });
}