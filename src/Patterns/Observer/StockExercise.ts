/*
Exercise
We’re building an application for watching the price of various
stocks. There are two places in our application where we need to
display the stocks:
- StatusBar: shows the popular stocks
- StockListView: shows the complete list of stocks
When the price of a stock changes, the corresponding views
(StatusBar and/or StockListView) need to be refreshed to reflect the
latest price.
Our application currently does not have the ability to communicate
the change in stock prices to the corresponding views.
Use the observer pattern to solve this problem.
*/

class Stock {
  constructor(public price: number, public popularity: number) {}

  static FakeData(amount: number) {
    const stocks: Stock[] = [];

    for (let i = 0; i < amount; i++) {
      const randomPrice = Math.floor(Math.random() * 100 + 1);
      const randomPopularity = Math.floor(Math.random() * 1000 + 1);

      stocks.push(new Stock(randomPrice, randomPopularity));
    }

    return stocks;
  }
}

interface Observer {
  update(): void;
}

class Observable {
  private observers: Observer[] = [];

  public attach(observer: Observer): void {
    this.observers.push(observer);
    observer.update();
  }

  public detach(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    if (!index) return;
    this.observers.splice(index);
  }

  protected notify(): void {
    for (const observer of this.observers) {
      observer.update();
    }
  }
}

class StockData extends Observable {
  private _stocks = Stock.FakeData(50);

  get stocks() {
    return this._stocks;
  }

  public addStock(stock: Stock) {
    this._stocks.push(stock);
    this.notify();
  }
}

class StockListView implements Observer {
  constructor(private data: StockData) {}

  update(): void {
    console.log('I was notified of an update');
  }

  get shown(): Stock[] {
    return this.data.stocks;
  }
}

class StatusBar implements Observer {
  constructor(private data: StockData) {}

  update(): void {
    console.log('I was notified of an update');
  }

  get shown(): Stock[] {
    const popularDesc = this.data.stocks.sort(
      (a, b) => b.popularity - a.popularity
    );

    return popularDesc.slice(0, 5);
  }
}

const stockData = new StockData();
const statusBar = new StatusBar(stockData);
const stockView = new StockListView(stockData);

stockData.attach(statusBar);
stockData.attach(stockView);
stockData.stocks.push(new Stock(22, 8888));
console.log(statusBar.shown[0]);
