export default function Card(props){
    const {label,children} = props;
    return(
        <div class="card mb-4">
        <div class={label}>
            {children} .
        </div>
    </div>
    )
}