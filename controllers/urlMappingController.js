async function giveShortURL(longURL)
{
    return Math.random();
}
module.exports.generateShortURL = async(req, res)=>{
    const { longURL } = req.body;
    const shortURL = await giveShortURL(longURL);
    //save in db
    res.status(200).send({msg:shortURL});
}