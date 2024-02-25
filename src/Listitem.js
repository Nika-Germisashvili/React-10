function Listitem(props) {
    return (
        <>
            {
                props.arr.map((item, index) => <p key={index}>{ item + " " + (index + 1)}</p>)
            }
        </>
    )
}

export default Listitem;