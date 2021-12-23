import Table from "../elements/Table/Table"
import { useSelector } from "react-redux"

import { requestSorting, sortList } from "../../features/list_feature"
import { useEffect } from "react"
import { useDispatch } from "react-redux"

export const List = () => {
    const dispatch = useDispatch()
    const collectionAsPages = useSelector(initialState => initialState.list.collectionAsPages)
    const currentPageIndex = useSelector(initialState => initialState.list.currentPageIndex)
    const currentPageToDisplay = collectionAsPages[currentPageIndex]

    const sortListBy = (filterParam, reverse ) => {  console.log(filterParam, reverse);dispatch(sortList(filterParam, reverse)) }

 

    return (
        <div>
            { collectionAsPages?
                <Table
                currentPageToDisplay={currentPageToDisplay}
                sortListBy={sortListBy}
                />
                : 'loading'
            }
        </div>

    )
}
export default List