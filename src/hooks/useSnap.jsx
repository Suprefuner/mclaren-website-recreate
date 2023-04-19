import { useSnapshot } from "valtio"
import state from "../store"
const useSnap = () => useSnapshot(state)

export default useSnap
