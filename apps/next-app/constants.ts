export const KEYCHAIN_URL = 'https://x.cartridge.gg'
export const RPC_URL = 'https://api.cartridge.gg/x/starknet/mainnet'
export const SEPOLIA_RPC_URL = 'https://api.cartridge.gg/x/starknet/sepolia'
export const REDIRECT_URI = 'https://t.me/NothingAgent_bot/NothingAgent'

export const ETH_TOKEN_ADDRESS =
  '0x049d36570d4e46f48e99674bd3fcc84644ddd6b96f7c741b1562b82f9e004dc7'

export const USDC_TOKEN_ADDRESS =
  '0x53c91253bc9682c04929ca02ed00b3e423f6710d2ee7e0d5ebb06f3ecf368a8'

export const STRK_TOKEN_ADDRESS =
  '0x4718f5a0fc34cc1af16a1cdee98ffb20c31f5cd61d6ab07201858f4287c938d'

export const DAI_TOKEN_ADDRESS =
  '0xda114221cb83fa859dbdb4c44beeaa0bb37c7537ad5ae66fe5e0efd20e6eb3'

export const USDT_TOKEN_ADDRESS =
  '0x68f5c6a61780768455de69077e07e89787839bf8166decfbf92b645209c0fb8'

export const LORDS_TOKEN_ADDRESS =
  '0x124aeb495b947201f5fac96fd1138e326ad86195b98df6dec9009158a533b49'

export const SWAP_USDC_STRK_ADDRESS =
  '0x4270219d365d6b017231b52e92b3fb5d7c8378b05e9abc97724537a80e93b0f'

export const POLICIES = [
  {
    target: USDC_TOKEN_ADDRESS,
    method: 'approve',
    description: 'Approve USDC token for the swap.',
  },
  {
    target: ETH_TOKEN_ADDRESS,
    method: 'approve',
    description: 'Approve ETH token for the swap.',
  },
  {
    target: STRK_TOKEN_ADDRESS,
    method: 'approve',
    description: 'Approve STRK token for the swap.',
  },
  {
    target: DAI_TOKEN_ADDRESS,
    method: 'approve',
    description: 'Approve DAI token for the swap.',
  },
  {
    target: USDT_TOKEN_ADDRESS,
    method: 'approve',
    description: 'Approve USDT token for the swap.',
  },
  {
    target: LORDS_TOKEN_ADDRESS,
    method: 'approve',
    description: 'Approve LORDS token for the swap.',
  },
  {
    target: SWAP_USDC_STRK_ADDRESS,
    method: 'multi_route_swap',
    description: 'Swap USDC to STRK.',
  },
]
