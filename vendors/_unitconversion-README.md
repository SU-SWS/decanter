_unitconversion.scss (v.2.1.2)
==============

**Convert Anything** (almost)

At the moment the following units are supported (please comment if something is wrong/missing):

````SCSS
px, pt, pc, in, mm, cm, em, rem, ex, ch, vw, vh, vmin, vmax,
deg, rad, grad, turn, dpi, dpcm, dppx, s, ms, hz, khz, number,
ratio
````


**Simple Syntax**

Rather than going with the "good" old fromUnit-to-toUnit(fromUnit) syntax this function set is based on toUnit(fromUnit) making it a lot shorter and less cumbersome to maintain – as shown below :-)

````SCSS
       pt-to-px(input);
       pc-to-px(input);       
       in-to-px(input);       
       mm-to-px(input);    ==>   px(input);   
       cm-to-px(input);              
       em-to-px(input);              
       rem-to-px(input);                     
       num-to-px(input);  
`````
**Note!**

* To allow conversion between relative and absolute lengths em and rem are calculated as pixel values based on base-font-size (16px browser default). If you change the base font size of your document – remember to set the <code>$base-font-size</code> variable accordingly.

* To ease the job of handling compounds the em function takes multiple arguments. Each argument is treated as an em compound and used to calculate the visual size.
Example – how to set a visual size of 18px on a class nested in an element with a font-size of 2em:
````SCSS
      .class {
          font-size: em(18px, 2em);  ==>   0.5625em;
      }
`````
* If you use unit conversion in relation to the font shorthand syntax be aware that line-height "/" will cause division. To prevent this from happening you can either either interpolate the value or use + to add the pieces together without calculation:
````SCSS
      h2 {
          font:300 #{em(24px)}/3 'Lato', sans-serif;
      }
````
<table>
<tr><th colspan="3">Conversion table</th></tr>
<tr><td>Type</td><td>Function</td><td>Input units</td></tr>
<tr><td>Absolute length</td><td>px($input);</td><td>px, pt, pc, in, mm, cm, em, rem, number</td></tr>
<tr><td>               </td><td>pt($input);</td><td>px, pt, pc, in, mm, cm, em, rem, number</td></tr>
<tr><td>               </td><td>pc($input);</td><td>px, pt, pc, in, mm, cm, em, rem, number</td></tr>
<tr><td>               </td><td>in($input);</td><td>px, pt, pc, in, mm, cm, em, rem, number</td></tr>
<tr><td>               </td><td>mm($input);</td><td>px, pt, pc, in, mm, cm, em, rem, number</td></tr>
<tr><td>               </td><td>cm($input);</td><td>px, pt, pc, in, mm, cm, em, rem, number</td></tr>

<tr><td>Relative length</td><td>em($input);</td><td>px, pt, pc, in, mm, cm, em, rem, number</td></tr>
<tr><td>               </td><td>rem($input);</td><td>px, pt, pc, in, mm, cm, em, rem, number</td></tr>
<tr><td>               </td><td>ex($input);</td><td>ex, number                              </td></tr>
<tr><td>               </td><td>ch($input);</td><td>ch, number                              </td></tr>
<tr><td>               </td><td>vw($input);</td><td>vw, number                              </td></tr>
<tr><td>               </td><td>vh($input);</td><td>vh, number                              </td></tr>
<tr><td>               </td><td>vmin($input);</td><td>vmin, number                          </td></tr>
<tr><td>               </td><td>vmax($input);</td><td>vmax, number                          </td></tr>

<tr><td>Angle          </td><td>deg($input);</td><td>deg, rad, grad, turn, number           </td></tr>
<tr><td>               </td><td>rad($input);</td><td>deg, rad, grad, turn, number           </td></tr>
<tr><td>               </td><td>grad($input);</td><td>deg, rad, grad, turn, number          </td></tr>
<tr><td>               </td><td>turn($input);</td><td>deg, rad, grad, turn, number          </td></tr>

<tr><td>Resolution     </td><td>dpi($input);</td><td>dpi, dpcm, dppx, number                </td></tr>
<tr><td>               </td><td>dpcm($input);</td><td>dpi, dpcm, dppx, number               </td></tr>
<tr><td>               </td><td>dppx($input);</td><td>dpi, dpcm, dppx, number               </td></tr>

<tr><td>Time           </td><td>ms($input);</td><td>ms, s, number                           </td></tr>
<tr><td>               </td><td>s($input);</td><td> ms, s, number                            </td></tr>

<tr><td>Frequency      </td><td>hz($input);</td><td>Hz, kHz, number                         </td></tr>
<tr><td>               </td><td>khz($input);</td><td>Hz, kHz, number                        </td></tr>


<tr><td>String        </td><td>str($input);<br>string($input);</td><td>Anything not null                       </td></tr>
<tr><td>Number        </td><td>num(input);<br>number($input)</td>
<td>px, pt, pc, in, mm, cm, em, rem, ex, ch,<br>vw, vh, vmin, vmax, deg, rad, grad, turn,<br>dpi, dpcm, dppx, s, ms, hz, khz, number</td></tr>
<tr><td>              </td><td>int($input);</td>
<td>px, pt, pc, in, mm, cm, em, rem, ex, ch,<br>vw, vh, vmin, vmax, deg, rad, grad, turn,<br>dpi, dpcm, dppx, s, ms, hz, khz, number</td></tr>
<tr><td>              </td><td>uint($input);</td>
<td>px, pt, pc, in, mm, cm, em, rem, ex, ch,<br>vw, vh, vmin, vmax, deg, rad, grad, turn,<br>dpi, dpcm, dppx, s, ms, hz, khz, number</td></tr>
</table>


Cive it a try on:
[Sassmeister.com](http://www.sassmeister.com/gist/81feb28c986a212f401b) or [CodePen.io](http://codepen.io/jakob-e/pen/AHunv)


<hr>


[The MIT License (MIT)](https://opensource.org/licenses/MIT)
Copyright (c) 2016 Jakob Eriksen

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
