const dataArtisti =  {   
    nomeArt:"Pearl Jam",
    album:[
        {
            "id":"01",
            "nome":"Ten",
            "anno":"1991",
            "img": "https://images-na.ssl-images-amazon.com/images/I/81IIHrrH7PL._AC_SL1500_.jpg",
            "brani":[
                {
                    "idBrano":"01",
                    "nome":"Once",
                    "durata":"3:51"
                },
                {
                    "idBrano":"02",
                    "nome":"Even Flow",
                    "durata":"4:53"
                },
                {
                    "idBrano":"03",
                    "nome":"Alive",
                    "durata":"5:40"
                },
                {
                    "idBrano":"04",
                    "nome":"Why Go",
                    "durata":"3:19"
                },
                {
                    "idBrano":"05",
                    "nome":"Black",
                    "durata":"5:44"
                },
                {
                    "idBrano":"06",
                    "nome":"Jeremy",
                    "durata":"5:18"
                },
                {
                    "idBrano":"07",
                    "nome":"Oceans",
                    "durata":"2:41"
                },
                {
                    "idBrano":"08",
                    "nome":"Porch",
                    "durata":"3:30"
                },
                {
                    "idBrano":"09",
                    "nome":"Garden",
                    "durata":"4:59"
                },
                {
                    "idBrano":"10",
                    "nome":"Deep",
                    "durata":"4:18"
                },
                {
                    "idBrano":"11",
                    "nome":"Release",
                    "durata":"9:05"
                }
            ]
        },  
        {
            "id":"02",
            "nome":"Vs.",
            "anno":"1993",
            "img": "",
            "brani":[
                {
                    "idBrano":"12",
                    "nome":"Go",
                    "durata":"3:12"
                },
                {
                    "idBrano":"13",
                    "nome":"Animal",
                    "durata":"2:49"
                },
                {
                    "idBrano":"14",
                    "nome":"Daughter",
                    "durata":"3:55"
                },
                {
                    "idBrano":"15",
                    "nome":"Glorified G",
                    "durata":"3:26"
                },
                {
                    "idBrano":"16",
                    "nome":"Dissident",
                    "durata":"3:35"
                },
                {
                    "idBrano":"17",
                    "nome":"W.M.A.",
                    "durata":"5:59"
                },
                {
                    "idBrano":"18",
                    "nome":"Blood",
                    "durata":"2:50"
                },
                {
                    "idBrano":"19",
                    "nome":"Rearviewmirror",
                    "durata":"4:44"
                },
                {
                    "idBrano":"20",
                    "nome":"Rats",
                    "durata":"4:15"
                },
                {
                    "idBrano":"21",
                    "nome":"Elderly Woman Behind the Counter in a Small Town",
                    "durata":"3:15"
                },
                {
                    "idBrano":"22",
                    "nome":"Leash",
                    "durata":"3:09"
                },
                {
                    "idBrano":"23",
                    "nome":"Indifference",
                    "durata":"5:02"
                }
            ]
        },   
    ]
}

const {nomeArt,album} = dataArtisti 

const menubtn = (
    <div id="menu-btn"><a href="#"><i className="fa fa-bars" aria-hidden="true"></i></a></div>
);
const playerControl = (
    <div id="container-control">
      <div className="control"><a href="#"><i className="fa fa-play-circle" aria-hidden="true"></i> Play all</a></div>
      <div className="control"><a href="#"><i className="fa fa-plus-circle" aria-hidden="true"></i> Aggiungi alla Playlist</a></div> 
      <div className="control"><a href="#"><i className="fa fa-minus-circle" aria-hidden="true"></i> Rimuovi dalla Playlist</a></div> 
    </div>
); 

const branoCorrente = (
    <div id="brano-container">
                {menubtn}
            <div className="img-brano"><img src={album[0].img} /></div>
            <div className="info-brano">
                <h1>{album[0].brani[0].nome} - {album[0].anno}</h1>
                    <span className="artist-name"><strong>{nomeArt}</strong></span><br />
                    <span className="album-name">{album[0].nome}</span>
                {playerControl}
            </div>
            
    </div>
); 

const playlistSongs = (
    album.map( albitem => {
        return(
                albitem.brani.map( brano => (
                    <tr key={brano.idBrano}>
                        <td>{brano.idBrano}.</td>
                        <td>{brano.nome}</td>
                        <td>{nomeArt}</td>
                        <td>{brano.durata}</td>
                        <td><button className="impBtn">impostazioni</button></td>   
                    </tr>
                )
            )
            )
    })
);

const playlist = (
    <div id="playlist-container">
              <table className="songtable">
                  <tr className="htable">
                      <td>#</td>
                      <td>titolo canzone</td>
                      <td>artista</td>
                      <td>minuti</td>
                      <td></td>
                  </tr>
                  {playlistSongs} 
              </table>
    </div>
); 

const onairFooter = (
    <div id="onair-container">
            <div className="onair-song">
                <div className="img-brano"><img src={album[0].img} /></div>
                <div className="info-brano">
                    <h1>{album[0].brani[0].nome} - {album[0].anno}</h1>
                        <span className="artist-name"><strong>{nomeArt}</strong></span>
                </div>  
            </div>
            <div className="onair-control">
                <a href=""><i className="fa fa-step-backward" aria-hidden="true"></i></a>
                <a href=""><i className="fa fa-step-forward" aria-hidden="true"></i></a>
                <a href=""><i className="fa fa-repeat" aria-hidden="true"></i></a>
            </div>  
    </div>
); 

const sidebar = (
<div id="leftSidebar">
    <a className="active" href=""><i className="fa fa-home" aria-hidden="true"></i></a>
    <a href=""><i className="fa fa-window-maximize" aria-hidden="true"></i></a>
    <a href=""><i className="fa fa-search" aria-hidden="true"></i></a>
    <a href=""><i className="fa fa-arrow-down" aria-hidden="true"></i></a>
    <a href=""><i className="fa fa-music" aria-hidden="true"></i></a>
    <a href=""><i className="fa fa-wifi" aria-hidden="true"></i></a>
</div>
);

ReactDOM.render(
    <div id="container">
        {sidebar}
        {branoCorrente}
        {playlist}
        {onairFooter}
    </div>,
    root
) 