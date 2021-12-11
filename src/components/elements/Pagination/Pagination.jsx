import { PaginationWrapper, PageNumber } from './Pagination_style'

const Pagination = ({pages, totalPages, currentActivePage}) => { 
    
    return (
        <PaginationWrapper>
            
            {[...Array(totalPages)].map((x, i) =>
                <PageNumber key={Math.random()}>{i+1}</PageNumber>
            )}
                
            
        { pages.map( page => ( 
            <PageNumber key={Math.random()}>{page}</PageNumber> ))
        }

        </PaginationWrapper>
    )
}
export default Pagination