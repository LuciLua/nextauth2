import Plans from "../../components/Plans/Plans";

export default function plans({ children }) {
    return (
        <div>
            <div>
                {children}
            </div>
            <Plans />
        </div>
    )
}