module.exports = {
    name: 'reset',
    description: 'donne stats perso',
    execute(client, message, args) {
        message.delete()
        if(message.author.id=='178450818620456960'||message.author.id=='614916253924196357' || message.author.id=='686539762525536267' 
		|| message.author.id=='475364030639243284'|| message.author.id=='330329849904234498'|| message.author.id=='469597206005940224'
		|| message.author.id=='503594521553010698') {
            message.channel.send(`Les données ont était reset! ${message.author}`)
            tbaut = []
            tbat =[]
            tbhp = []
            tbposi =[]
            for(let i in tbatrib){
                tbatrib[i]=1
            }
            tbakitour[0]=-2
            tb1foistour[0]=0
            tbdébut[0]=false
            tbanti=[]
        }else{
            message.channel.send(`Tu n'as pas les permissions ${message.author}`)
        }//else               
    }//execute
}//module