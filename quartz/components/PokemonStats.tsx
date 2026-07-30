import { QuartzComponent, QuartzComponentConstructor } from "./types"

// @ts-ignore
import script from "./PokemonStats.inline"
// @ts-ignore
import styles from "./pokemonStats.scss"

const PokemonStats: QuartzComponent = () => null

PokemonStats.afterDOMLoaded = script
PokemonStats.css = styles

export default (() => PokemonStats) satisfies QuartzComponentConstructor