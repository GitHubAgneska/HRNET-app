import { Fragment } from 'react'
import { PaginationWrapper, PageNumber, Paginated } from './Pagination_style'

const Pagination = ({pages, totalPages, currentActivePage, changePage}) => { 
    
    if (!pages) { return <span>loading</span>}
    console.log('PAGES====>', pages)

    return (
        <Fragment>
            <PaginationWrapper>
                
                {[...Array(totalPages)].map((x, i) =>
                    <PageNumber
                        key={Math.random()}
                        currentActivePage={i===currentActivePage}
                        onClick={()=> changePage(i)}
                        >{i+1}</PageNumber>
                )}
            
            </PaginationWrapper>

            { pages.map(page => (
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
            }

</Fragment>

    )
}
export default Pagination