# Simple Line Bot

1. Line Bot のアカウントを作成する
2. Channel Access Token を確保する
3. Webhook URL を登録する

----

1. と 2. は調べてください。

3. Webhook URL を登録する は *https* で通信である必要があります。

[Heroku](https://www.heroku.com/)を利用してもOK。

このプロジェクトを Heroku と接続し、 https://xxxxxxxxxxxxxx.herokuapp.com/callback をWebhook URLに登録してください。

----

Heroku を用意したくない人、Herokuへのデプロイの１分を省略したい方は [ngrok](https://ngrok.com/) が良さそうです。

[こちら](https://ngrok.com/)からダウンロード。圧縮されていたと思うので解凍。

ngrok を使って Webhook URL を獲得します。

    node app.js
    ./<ngrok のパス>/ngrok http 5000

ngrok を起動すると下記のようなのが表示されると思います

    ngrok by @inconshreveable                                                                                                                                            (Ctrl+C to quit)
    
    Session Status                online
    Version                       2.2.4
    Region                        United States (us)
    Web Interface                 http://127.0.0.1:4040
    Forwarding                    http://2fba8974.ngrok.io -> localhost:5000
    Forwarding                    https://2fba8974.ngrok.io -> localhost:5000
    
    Connections                   ttl     opn     rt1     rt5     p50     p90
                                  0       0       0.00    0.00    0.00    0.00

ここで表示されている https://2fba8974.ngrok.io を使います。

つまり https://2fba8974.ngrok.io/callback を Webhook URL に登録します。

これでオウム返しの出来上がり！




process.env.LINE_CHANNEL_ACCESS_TOKEN があるのでお気をつけて！
