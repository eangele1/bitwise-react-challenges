const Paginator = ({ searchSubmit, lastSearchTerm, currPage, resultsNum, setCurrPage, movies = []}) => {
    
    const goBack = () => {
        setCurrPage( currPage - 1 );
        let page_num = currPage - 1;
        searchSubmit(lastSearchTerm, page_num);
    }

    const goForward = () => {
        setCurrPage( currPage + 1 );
        let page_num = currPage + 1;
        searchSubmit(lastSearchTerm, page_num);
    }
    
    if(movies.length > 0){
        return (
            <div style={{ }}>
                <p>Page {currPage} of {Math.ceil(resultsNum/10)}</p>
                <button onClick={() => goBack()} disabled={currPage === 1}>←</button>
                <button onClick={() => goForward()} disabled={currPage === Math.ceil(resultsNum/10)}>→</button>
            </div>
        );
    }
    else{
        return null;
    }
}

export default Paginator;