export default function TabButton({children,isSelected,...props}){
    console.log('Tabbutton Component Executing');

    return(
    <li>
        <button className={isSelected && 'active'} {...props}>{children}</button>
    </li>
    );
}