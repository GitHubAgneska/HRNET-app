import Table from "../elements/Table/Table"
import { useSelector } from "react-redux"

export const List = () => {

    const collectionAsPages = useSelector(initialState => initialState.list.collectionAsPages)
    const currentPageIndex = useSelector(initialState => initialState.list.currentPageIndex)
    const currentPageToDisplay = collectionAsPages[currentPageIndex]

    const sortListBy = (filterParam, reverse ) => { requestFiltering(filterParam, reverse) }

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