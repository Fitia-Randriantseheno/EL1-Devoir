export default function Collapse(props){
    const{id,children} = props;
    return(
        <div class="collapse" id={id} data-bs-parent={parent}>
                <nav class="sb-sidenav-menu-nested nav">
                    {children}
         </nav>
        </div>
    )
}