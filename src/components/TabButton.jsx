export default function TabButton({children,onSelect}){
    console.log('Tabbutton Component Executing');

    return(
    <li>
        <button onClick={onSelect}>{children}</button>
    </li>
    );
}