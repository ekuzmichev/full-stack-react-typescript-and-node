import React, { FC, useEffect, useRef } from "react"

export interface ListItem {
    id: number
}

export interface ListItems {
    listItems?: ListItem[]
}

const ListCreator: FC<ListItems> = React.memo(({ listItems }: ListItems) => {
    let renderItems = useRef<JSX.Element[] | undefined>()

    useEffect(() => {
        console.log("Updated listItems")
        renderItems.current = listItems?.map((item, index) => {
            return <div key={item.id}>{item.id}</div>
        })
    }, [listItems])

    console.log("Render ListCreator")

    return (
        <>
            {renderItems.current}
        </>
    )
})

export default ListCreator