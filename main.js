var Cycler = {};
Cycler.oauth = Twitch.user()._result.chat_oauth_token;
Cycler.login = Twitch.user()._result.login;
Cycler.chan = window.location.href.split("/")[3];
Cycler.sock = new WebSocket("wss://irc.twitch.tv");
Cycler.colors = ["Blue", "BlueViolet", "CadetBlue", "Chocolate", "Coral", "DodgerBlue", "Firebrick", "GoldenRod", "Green", "HotPink", "OrangeRed", "Red", "SeaGreen", "SpringGreen", "YellowGreen"];
Cycler.turbo = Twitch.user()._result.has_turbo;

function randNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

Cycler.newColor = function () {
  if (this.turbo) {
    var color = "",
        vals = "0123456789ABCDEF".split("");
    do {
      for (var i = 0; i < 6; i++) {
        color += vals[randNum(0, vals.length - 1)];
      }
    } while (color == this.prevColor);
    this.prevColor = color;
    return color;
  } else {
    var color;
    do {
      color = this.colors[randNum(0, this.colors.length - 1)];
    } while (color == this.prevColor);
    this.prevColor = color;
    return color;
  }
};

Cycler.sock.onmessage = function(msg) {
  if (msg.data == "PING :tmi.twitch.tv\r\n") {
    Cycler.sock.send("PONG :tmi.twitch.tv\r\n");
  } else if (msg.data.split(/\W/)[1] == Cycler.login) {
    Cycler.sock.send("PRIVMSG #" + Cycler.chan + " :.color " + Cycler.newColor() + "\r\n");
  }
};

Cycler.sock.onopen = function () {
  Cycler.sock.send("PASS oauth:" + Cycler.oauth + "\r\n");
  Cycler.sock.send("NICK " + Cycler.login + "\r\n");
  Cycler.sock.send("JOIN #" + Cycler.chan + "\r\n");
};

Cycler.sock.onclose = function () {
  console.log("Cycler closed!");
};

console.log("Cycler loaded!");
