import Table from "../elements/Table/Table"
import { useSelector, useDispatch } from "react-redux"

import { selectCollection, sortList, updatePage, changeEntriesAmount } from "../../features/list_feature"

import Pagination from "../elements/Pagination/Pagination"
import SelectEntriesBox from '../elements/SelectEntriesBox/SelectEntriesBox'



export const List = () => {
    const dispatch = useDispatch()

    const collectionAsPages = useSelector(initialState => initialState.list.collectionAsPages)
    const currentPageIndex = useSelector(initialState => initialState.list.currentPageIndex)
    const currentPageToDisplay = collectionAsPages[currentPageIndex]??collectionAsPages[0]
    const totalPages = useSelector(initialState => initialState.list.totalPages)

    const sortListBy = (filterParam, reverse ) => { dispatch(sortList(filterParam, reverse)) }
    const changePage = (pageNumber) => { console.log('page requested:', pageNumber); dispatch(updatePage(pageNumber))}

    const entriesOptions = [ 15, 30, 50]
    const selectEntriesAmount = (n) => { dispatch(changeEntriesAmount(n)) }
    const currentlyShowing = currentPageToDisplay.length
    const collection = useSelector(initialState => initialState.list.collection)
    const listTotal = collection.length

    return (
        <div>

            <SelectEntriesBox 
                options={entriesOptions}
                selectEntriesAmount={selectEntriesAmount}
                currentlyshowing={currentlyShowing}
                listTotal={listTotal}
            />

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