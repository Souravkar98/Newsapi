import React, { Component } from 'react'
import NewItem from './NewItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'


export class news extends Component {
    static defaultProps = {
        pageSize: 10,
        Category: "technology"
    }
    PropTypes = {
        pageSize: PropTypes.number,
        Category: PropTypes.string
    }
    article = [
        {
            "source": {
                "id": null,
                "name": "New York Times"
            },
            "author": "Shane Goldmacher, Maggie Haberman",
            "title": "How J.D. Vance Won in Ohio: A Trump Endorsement, a Fox News Stage and Money - The New York Times",
            "description": "A big endorsement was decisive, but a cable news megaphone and a huge infusion of spending helped pave the way to victory.",
            "url": "https://www.nytimes.com/2022/05/04/us/politics/jd-vance-trump-ohio-fox-news.html",
            "urlToImage": "https://static01.nyt.com/images/2022/05/04/multimedia/04pol-ohio-vance-victory/04pol-ohio-vance-victory-facebookJumbo-v2.jpg",
            "publishedAt": "2022-05-05T01:50:06Z",
            "content": "When ads supporting Mr. Vance began to run, he gained traction, though he still trailed. By April 4, his super PAC posted a memo saying Mr. Vance was no longer primarily associated with his prior cri… [+1888 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Bradford Betz",
            "title": "California Gov. Gavin Newsom on Roe v. Wade leak: 'If men could get pregnant...' - Fox News",
            "description": "California Governor Gavin Newsom on Wednesday derided abortion opponents as extremists who are more interested in control rather than family values.",
            "url": "https://www.foxnews.com/politics/california-governor-gavin-newsom-supreme-court-roe-v-wade",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Gavin-Newsom.jpg",
            "publishedAt": "2022-05-04T21:24:56Z",
            "content": "California Governor Gavin Newsom on Wednesday derided abortion opponents as extremists who are more interested in control rather than family values. \r\nThe Democratic governors comments come just days… [+2502 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "WFSB"
            },
            "author": "Olivia Kalentek",
            "title": "DPH: Man diagnosed with first case of Powassan virus in Connecticut - Eyewitness News 3",
            "description": "A man from Windham was diagnosed with the first case of Powassan virus in Connecticut in 2022.",
            "url": "https://www.wfsb.com/2022/05/04/dph-man-diagnosed-with-first-case-powassan-virus-connecticut/",
            "urlToImage": "https://gray-wfsb-prod.cdn.arcpublishing.com/resizer/hTyB8KhADUqA8XyISwgN20INYp4=/980x0/smart/filters:quality(85)/cloudfront-us-east-1.images.arcpublishing.com/gray/ZC6HTQYTQRC27KHFB67HRGAZWA.jpg",
            "publishedAt": "2022-05-04T16:45:00Z",
            "content": "Conn. (WFSB) A man from Windham was diagnosed with the first case of Powassan virus in Connecticut in 2022.\r\nThe Connecticut Department of Public Health (DPH) says the Powassan virus is contracted th… [+1946 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "Fox Business"
            },
            "author": "Kristen Altus",
            "title": "Gas, food prices will continue to climb with ‘no end in sight,’ economics professor warns - Fox Business",
            "description": "Fox News contributor and The King's College's Brian Brenberg says Biden and the Fed's handling of high gas and food prices will turn inflation into a recession.",
            "url": "https://www.foxbusiness.com/economy/gas-food-prices-inflation-no-end-in-sight-near-recession-brian-brenberg",
            "urlToImage": "https://a57.foxnews.com/static.foxbusiness.com/foxbusiness.com/content/uploads/2022/02/0/0/Inflation-America.jpg?ve=1&tl=1",
            "publishedAt": "2022-05-04T13:15:15Z",
            "content": "With April’s inflation numbers out next week, Fox News contributor and The King’s College executive vice president of business and economics Brian Brenberg warned 40-year high consumer prices will ca… [+2422 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Lorraine Taylor",
            "title": "'Toddlers and Tiaras' star Kailia Posey, 16, died by suicide: report - Fox News",
            "description": "16-year-old TLC star Kailia Posey died by suicide, according to a new report.",
            "url": "https://www.foxnews.com/entertainment/toddlers-and-tiaras-star-kailia-posey-dead-16-suicide",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/05/Kailia_Posey_Facebook.jpg",
            "publishedAt": "2022-05-04T12:35:14Z",
            "content": "Editor's note: This story discusses suicide. If you or someone you know is having thoughts of suicide, please contact the National Suicide Prevention Lifeline at 1-800-273-TALK (8255).\r\n\"Toddlers and… [+2832 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "'We want Ukraine to win': EU should impose total ban on Russian oil, says Von der Leyen - Guardian News",
            "description": "Ursula von der Leyen's proposal of a ban on Russian oil imports to the EU was met with lengthy applause from MEPs in Brussels. Subscribe to Guardian News on ...",
            "url": "https://www.youtube.com/watch?v=dsEzROn1eQU",
            "urlToImage": "https://i.ytimg.com/vi/dsEzROn1eQU/maxresdefault.jpg",
            "publishedAt": "2022-05-04T11:39:26Z",
            "content": null
        }
    ]
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
        document.title = `${this.capitalizeFirstLetter(this.props.Category)} - NewsMonkey`
        

    }
    async updateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.Category}&apiKey=4754847718c54a71b51b24929d8ed2e8&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let persedata = await data.json();
        this.setState({
            articles: persedata.articles,
            totalResult: persedata.totalResults,
            loading: false
        })
    }

    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.Category}&apiKey=4754847718c54a71b51b24929d8ed2e8&page=1&pageSize=${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let persedata = await data.json();
        this.setState({
            articles: persedata.articles,
            totalResult: persedata.totalResults,
            loading: false
        })
        console.log(this.state.articles)
    }
    previousPage = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.Category}&apiKey=4754847718c54a71b51b24929d8ed2e8&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true });
        console.log(this.state.articles)
        let data = await fetch(url);
        let persedata = await data.json();
        this.setState({
            page: this.state.page - 1,
            articles: persedata.articles,
            loading: false
        })

    }
    nextPage = async () => {
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResult / 20))) {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=${this.props.Category}&apiKey=4754847718c54a71b51b24929d8ed2e8&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`
            this.setState({ loading: true });
            let data = await fetch(url);
            let persedata = await data.json();
            this.setState({
                page: this.state.page + 1,
                articles: persedata.articles,
                loading: false
            })
        }
    }
    render() {
        return (
            <div className='container'>
                <h1 className='text-center my-4'>NewsMonkey - Top News Headline on {this.capitalizeFirstLetter(this.props.Category)}</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewItem title={element.title} description={element.description}
                                imgUrl={element.urlToImage} newsUrls={element.url}
                                author={element.author}
                                date={element.publishedAt}
                                source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="containere d-flex justify-content-between">
                    <button type="button " style={{ margin: '20px' }} disabled={this.state.page <= 1} onClick={this.previousPage} className="btn btn-dark "> &larr; Previous </button>
                    <button type="button" style={{ margin: '20px' }} onClick={this.nextPage}
                        disabled={this.state.page + 1 > Math.ceil(this.state.totalResult / 20)}
                        className="btn btn-dark">Next &rarr;</button>
                </div>
            </div>
        )
    }
}
export default news
