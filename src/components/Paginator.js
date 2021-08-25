const Paginator = ({ searchSubmit, lastSearchTerm, currPage, resultsNum, setCurrPage, movies = []}) => {
    
    let buttonStyle = {
        backgroundColor: "black",
        color: "white",
        fontSize: "25px",
        padding: "5px 10px",
        borderRadius: "5px",
        margin: "10px",
        cursor: "pointer",
    };

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
            <div>
                <div>Page {currPage} of {Math.ceil(resultsNum/10)}</div>
                <button style={buttonStyle} onClick={() => goBack()} disabled={currPage === 1}>←</button>
                <button style={buttonStyle} onClick={() => goForward()} disabled={currPage === Math.ceil(resultsNum/10)}>→</button>
            </div>
        );
    }
    else{
        return null;
    }
}

export default Paginator;