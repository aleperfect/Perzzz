let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `*𝑽𝒆𝒏𝒕𝒂𝒔 𝑷𝒆𝒓𝒛𝒛𝒛💸  ${pesan}`
  let teks = `🍀 𝑽𝒆𝒏𝒕𝒂𝒔 𝑷𝒆𝒓𝒛𝒛𝒛 PLATAFORMAS, BOTS, CUENTAS FF, DIAMANTES Y CLANES FF🎭
   ${oi}\n\n🛍️ *https://chat.whatsapp.com/JdZt0ICENcS44BLkP78C31*\n`
  for (let mem of participants) {
  teks += `🎭 @${mem.id.split('@')[0]}\n`}
  teks += `𝑷𝒆𝒓𝒛𝒛𝒛💸`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación|aviso|despierten)$/i
  handler.admin = true
  handler.group = true
  export default handler