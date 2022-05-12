const ytdl = require("ytdl-core");

const cargarVista = async( req, res ) => {
    return res.render("../public/views/index");
}

const obtenerVideo = async( req, res ) => {
    const url = req.query.url;

    let tipo;
    if(url.includes("youtube")){
        tipo = "youtube";
        const v_id = req.query.url.split('v=')[1];

        const info = await ytdl.getInfo(req.query.url);

        return res.render('../public/views/download', {
            url: "https://www.youtube.com/embed/" + v_id,
            info: info.formats.sort((a,b) => {
                return a.mimeType < b.mimeType;
            })
        } );

    }else if(url.includes("fb") || url.includes("facebook") ){
        tipo = "facebook";
    }else if (url.includes("twitter")){
        tipo = "twitter"
    }

    // return res.json({
    //     tipo,
    //     url
    // });
}

module.exports = {
    cargarVista,
    obtenerVideo
}