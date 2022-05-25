export default function Link(props){
    const{href,children} = props;
    return(
        <a class="nav-link" href={href}>
        <div class="sb-nav-link-icon">{children}
        </div>
        Tables
    </a>
    )
}