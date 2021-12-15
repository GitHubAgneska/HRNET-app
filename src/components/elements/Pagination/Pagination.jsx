import { PaginationWrapper, PageNumber } from './Pagination_style'

const Pagination = ({totalPages, currentActivePage, changePage}) => { 

    return (

        <PaginationWrapper>
            
            {[...Array(totalPages)].map((x, i) =>
                <PageNumber
                    key={Math.random()}
                    currentActivePage={i===currentActivePage}
                    onClick={()=> changePage(i)}
                    >{i+1}</PageNumber>
            )}
        
        </PaginationWrapper>
    )
}
export default Pagination



{/*   { pages.map(page => (
    <Paginated page={page} key={Math.random()}>
        { page.map(item => (
            <Fragment key={Math.random()}>
                <span key={Math.random()}>{item.firstName}</span>
                <span key={Math.random()}>{item.lastName}</span>
                <span key={Math.random()}>{item.city}</span>
            </Fragment>
            
            
            ))}
    </Paginated>
    )) 
} */}