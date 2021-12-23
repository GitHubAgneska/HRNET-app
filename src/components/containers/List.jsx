import Table from "../elements/Table/Table"
import { useSelector, useDispatch } from "react-redux"

import { sortList, updatePage } from "../../features/list_feature"

import Pagination from "../elements/Pagination/Pagination"


export const List = () => {
    const dispatch = useDispatch()

    const collectionAsPages = useSelector(initialState => initialState.list.collectionAsPages)
    const currentPageIndex = useSelector(initialState => initialState.list.currentPageIndex)
    const currentPageToDisplay = collectionAsPages[currentPageIndex]
    const totalPages =  useSelector(initialState => initialState.list.totalPages)

    const sortListBy = (filterParam, reverse ) => { dispatch(sortList(filterParam, reverse)) }
    const changePage = (pageNumber) => { console.log('page requested:', pageNumber); dispatch(updatePage(pageNumber))}



    return (
        <div>
            { collectionAsPages?
                <Table
                currentPageToDisplay={currentPageToDisplay}
                sortListBy={sortListBy}
                />
                : 'loading'
            }

            <Pagination 
                totalPages={totalPages}
                currentActivePage={currentPageIndex}
                changePage={changePage}
            />

        </div>

    )
}
export default List