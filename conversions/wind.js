const Concentrate = require("concentrate");

module.exports = (app, plugin) => {
  return {
    title: 'Wind (130306)',
    type: 'toN2K',
    optionKey: 'WIND',
    keys: ["environment.wind.angleApparent", "environment.wind.speedApparent"],
    callback: (angle, speed) => {
      try {
        return [
          {
            pgn: 130306,
            buffer: Concentrate()
              .uint8(0xff)
              .uint16((speed*100).toFixed(0))
              .uint16((angle * 10000).toFixed(0))
              .uint8(0xfa)
              .uint8(0xff)
              .uint8(0xff)
              .result()
          }
        ]
      } catch ( err ) {
        console.error(err)
      }
    }
  }
}
