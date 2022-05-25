export default function Layout(props){
    const{target,controls,i,label} = props;
    return(
        <a class="nav-link collapsed" href="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls={controls}>
                            <div class="sb-nav-link-icon"><i class={i}></i></div>
                            Layouts
                            <div class="sb-sidenav-collapse-arrow"><i class="fas fa-angle-down"></i></div>
         </a>
    )
}