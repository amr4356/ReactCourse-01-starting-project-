export default function TabButton({children,onSelect,isSelected}){
    console.log('Tabbutton Component Executing');

    return(
    <li>
        <button className={isSelected && 'active'} onClick={onSelect}>{children}</button>
    </li>
    );
}