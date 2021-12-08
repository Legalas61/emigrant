import { BLACK } from "../global"
import Selector from "./selector"

export default function Header() {
    return (
        <header>
        <h1>Balalaika</h1>
        <label>
            Страна: <Selector />
        </label>

        <style jsx>{`
            header{
                background-color: ${BLACK};
                width: 100%;
                display: flex;
                align-items: center;
                justify-content: space-between;
                padding: 0 10px;
            }
            h1, label{
                color: #fff;
            }
        `}</style>
        </header>
    )
}