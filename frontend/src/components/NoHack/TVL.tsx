import { useBalance } from "wagmi"
import { useNetwork } from "wagmi"
import { contractAddresses } from "../../../constants/index"
import { formatUnits } from "viem"

function TVL() {
	const { chain } = useNetwork()
	let contractAddress = ""
	let usdc = ""

	if (chain && contractAddresses) {
		const chainId = chain.id
		// eslint-disable-next-line
		contractAddress = contractAddresses["31337"]["nonFirewalledProtocol"]
		// eslint-disable-next-line
		usdc = contractAddresses["31337"]["usdc"]
	}

	const { data, isError, isLoading } = useBalance({
		address: contractAddress as `0x${string}`,
		chainId: 31337,
		token: usdc as `0x${string}`,
		watch: true,
	})

	if (isLoading) return <div>Fetching balance…</div>
	if (isError) return <div>Error fetching balance</div>
	return <>{data?.formatted}</>
}

export default TVL
