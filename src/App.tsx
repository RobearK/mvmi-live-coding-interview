import './styles.css'

function App() {
    /*
  FELADAT

  Két részből áll a feladat, melyek egymás alatt helyezkedjenek majd el a TODO helyén.
  Mindkét komponensnek legyen egy címe, mely a tartalma fölött jelenik meg: "Tőzsdei adatok" és "Elemzés" néven.

  Alkalmazás induláskor töltsd be az összes adatot az alabbi URL-ről https://jsonmock.hackerrank.com/api/stocks
  és jelenítsd meg az összes tartalmát a már előkészített <Table /> -ben.

  A második komponensben az alábbi adatok jelenjenek meg a fent betöltött táblázat alapján:
    - Elmúlt "close"-ok átlaga 2006-ig visszamenőleg.
    - Hány nap volt a legtöbb egyhuzamban, ahol magasabb a "close" mint az "open".
    - Mely napon volt a legalacsonyabb a "low" és azóta hány nap telt el.

  Hozz létre egy input-ot a táblázat headerjében, melybe beírva egy értéket, csak az annál nagyobb "close"-al rendelkező
  elemek maradnak meg; de az input tartalmát törölve az eredeti adathalmaz látható.
  
 */

    return (
        <>
            <div className="header">
                <h2 className="headerItem">MVM Informatika</h2>
            </div>

            <div className="content">TODO</div>
        </>
    )
}

export default App
