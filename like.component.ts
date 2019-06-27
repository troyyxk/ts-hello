export class Like {
  public _count: number;
  public _lighted: boolean;

  constructor(_count, _lighted) {
    this._count = _count;
    this._lighted = _lighted;
  }

  onClick() {
    this._count += this._lighted ? -1 : 1;
    // this._count = this._lighted ? ++this._count : --this._count; // not sure about thisd logic on the ++ and --, ok, but cant be better, by better I mean more clears
    this._lighted = !this._lighted;
  }
}
