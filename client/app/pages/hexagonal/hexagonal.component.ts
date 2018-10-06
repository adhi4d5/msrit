
import { Component, ElementRef, ViewChild, AfterViewInit } from "@angular/core";
import {Router,ActivatedRoute } from "@angular/router";
import * as d3 from 'd3';
import * as $ from 'jquery';

let no_of_sides = 6;

@Component({
  selector: 'app-hexagonal',
  templateUrl: './hexagonal.component.html',
  styleUrls: ['./hexagonal.component.scss']
})
export class HexagonalComponent  {

    
  @ViewChild('hexachild') el: ElementRef;
  //hexa_ser:HexagonalService;
  nLevels: number;
  topMargin: number = 0;
  hexR: number = 60;
  data: any[];
  side_component:any[];
  

  constructor(public router: Router,private ac:ActivatedRoute,
    ) {
  }
  ngAfterViewInit() {
    this.data= [{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand0","country":"test0","product":"product0","kpi":"kpi0","curr_value":"39138713.23","prev_value":"28945956.74","deviation":"23.27","alert_color":"#82AA3C","alert_rank":"1","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand0;country0;23.27;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand1","country":"test1","product":"product1","kpi":"kpi1","curr_value":"9112273.36","prev_value":"5383653.43","deviation":"5.42","alert_color":"#82AA3C","alert_rank":"2","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand1;country1;5.42;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand2","country":"test2","product":"product2","kpi":"kpi2","curr_value":"5688622.97","prev_value":"3942970.38","deviation":"3.38","alert_color":"#82AA3C","alert_rank":"3","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand2;country2;3.38;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand3","country":"test3","product":"product3","kpi":"kpi3","curr_value":"5389051.52","prev_value":"4603353.92","deviation":"3.20","alert_color":"#82AA3C","alert_rank":"4","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand3;country3;3.20;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand4","country":"test4","product":"product4","kpi":"kpi4","curr_value":"5226189.87","prev_value":"4302843.33","deviation":"3.11","alert_color":"#82AA3C","alert_rank":"5","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand4;country4;3.11;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand5","country":"test5","product":"product5","kpi":"kpi5","curr_value":"5208967.26","prev_value":"4379827.38","deviation":"3.10","alert_color":"#82AA3C","alert_rank":"6","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand5;country5;3.10;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand6","country":"test6","product":"product6","kpi":"kpi6","curr_value":"5159538.64","prev_value":"3450019.15","deviation":"3.07","alert_color":"#82AA3C","alert_rank":"7","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand6;country6;3.07;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand7","country":"test7","product":"product7","kpi":"kpi7","curr_value":"5126356.95","prev_value":"3764567.71","deviation":"3.05","alert_color":"#82AA3C","alert_rank":"8","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand7;country7;3.05;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand8","country":"test8","product":"product8","kpi":"kpi8","curr_value":"5041728.63","prev_value":"3297617.83","deviation":"3.00","alert_color":"#82AA3C","alert_rank":"9","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand8;country8;3.00;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand9","country":"test9","product":"product9","kpi":"kpi9","curr_value":"4708688.37","prev_value":"4341839.02","deviation":"2.80","alert_color":"#82AA3C","alert_rank":"10","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand9;country9;2.80;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand10","country":"test10","product":"product10","kpi":"kpi10","curr_value":"4363484.87","prev_value":"2438327.37","deviation":"2.59","alert_color":"#82AA3C","alert_rank":"11","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand10;country10;2.59;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand11","country":"test11","product":"product11","kpi":"kpi11","curr_value":"3135670.42","prev_value":"2920613.26","deviation":"1.86","alert_color":"#82AA3C","alert_rank":"12","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand11;country11;1.86;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand12","country":"test12","product":"product12","kpi":"kpi12","curr_value":"3104599.94","prev_value":"4655644.09","deviation":"1.85","alert_color":"#DB2E2E","alert_rank":"13","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand12;country12;1.85;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand13","country":"test13","product":"product13","kpi":"kpi13","curr_value":"2453557.25","prev_value":"2601361.08","deviation":"1.46","alert_color":"#9E9E9E","alert_rank":"14","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand13;country13;1.46;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand14","country":"test14","product":"product14","kpi":"kpi14","curr_value":"2136730.74","prev_value":"721118.12","deviation":"1.27","alert_color":"#82AA3C","alert_rank":"15","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand14;country14;1.27;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand15","country":"test15","product":"product15","kpi":"kpi15","curr_value":"1965726.51","prev_value":"1502219.82","deviation":"1.17","alert_color":"#82AA3C","alert_rank":"16","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand15;country15;1.17;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand16","country":"test16","product":"product16","kpi":"kpi16","curr_value":"1908587.00","prev_value":"1693162.41","deviation":"1.13","alert_color":"#82AA3C","alert_rank":"17","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand16;country16;1.13;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand17","country":"test17","product":"product17","kpi":"kpi17","curr_value":"1890139.61","prev_value":"1745964.37","deviation":"1.12","alert_color":"#82AA3C","alert_rank":"18","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand17;country17;1.12;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand18","country":"test18","product":"product18","kpi":"kpi18","curr_value":"1601613.74","prev_value":"552272.56","deviation":"0.95","alert_color":"#82AA3C","alert_rank":"19","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand18;country18;0.95;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand19","country":"test19","product":"product19","kpi":"kpi19","curr_value":"1581676.41","prev_value":"1018175.23","deviation":"0.94","alert_color":"#82AA3C","alert_rank":"20","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand19;country19;0.94;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand20","country":"test20","product":"product20","kpi":"kpi20","curr_value":"1561065.05","prev_value":"1583592.96","deviation":"0.93","alert_color":"#9E9E9E","alert_rank":"21","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand20;country20;0.93;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand21","country":"test21","product":"product21","kpi":"kpi21","curr_value":"1549757.01","prev_value":"1492500.02","deviation":"0.92","alert_color":"#82AA3C","alert_rank":"22","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand21;country21;0.92;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand22","country":"test22","product":"product22","kpi":"kpi22","curr_value":"1159489.10","prev_value":"1238677.38","deviation":"0.69","alert_color":"#9E9E9E","alert_rank":"23","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand22;country22;0.69;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand23","country":"test23","product":"product23","kpi":"kpi23","curr_value":"1117593.00","prev_value":"937971.64","deviation":"0.66","alert_color":"#82AA3C","alert_rank":"24","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand23;country23;0.66;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand24","country":"test24","product":"product24","kpi":"kpi24","curr_value":"1042202.27","prev_value":"632204.12","deviation":"0.62","alert_color":"#82AA3C","alert_rank":"25","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand24;country24;0.62;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand25","country":"test25","product":"product25","kpi":"kpi25","curr_value":"1014734.16","prev_value":"807307.10","deviation":"0.60","alert_color":"#82AA3C","alert_rank":"26","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand25;country25;0.60;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand26","country":"test26","product":"product26","kpi":"kpi26","curr_value":"984933.27","prev_value":"1500411.18","deviation":"0.59","alert_color":"#DB2E2E","alert_rank":"27","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand26;country26;0.59;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand27","country":"test27","product":"product27","kpi":"kpi27","curr_value":"860820.60","prev_value":"766528.44","deviation":"0.51","alert_color":"#82AA3C","alert_rank":"28","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand27;country27;0.51;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand28","country":"test28","product":"product28","kpi":"kpi28","curr_value":"802228.57","prev_value":"534228.50","deviation":"0.48","alert_color":"#82AA3C","alert_rank":"29","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand28;country28;0.48;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand29","country":"test29","product":"product29","kpi":"kpi29","curr_value":"791709.53","prev_value":"706111.61","deviation":"0.47","alert_color":"#82AA3C","alert_rank":"30","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand29;country29;0.47;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand30","country":"test30","product":"product30","kpi":"kpi30","curr_value":"739115.59","prev_value":"359886.58","deviation":"0.44","alert_color":"#82AA3C","alert_rank":"31","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand30;country30;0.44;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand31","country":"test31","product":"product31","kpi":"kpi31","curr_value":"727477.51","prev_value":"549443.20","deviation":"0.43","alert_color":"#82AA3C","alert_rank":"32","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand31;country31;0.43;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand32","country":"test32","product":"product32","kpi":"kpi32","curr_value":"722189.66","prev_value":"677864.82","deviation":"0.43","alert_color":"#82AA3C","alert_rank":"33","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand32;country32;0.43;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand33","country":"test33","product":"product33","kpi":"kpi33","curr_value":"689624.64","prev_value":"213842.68","deviation":"0.41","alert_color":"#82AA3C","alert_rank":"34","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand33;country33;0.41;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand34","country":"test34","product":"product34","kpi":"kpi34","curr_value":"625153.13","prev_value":"243722.61","deviation":"0.37","alert_color":"#82AA3C","alert_rank":"35","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand34;country34;0.37;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand35","country":"test35","product":"product35","kpi":"kpi35","curr_value":"599371.87","prev_value":"429763.98","deviation":"0.36","alert_color":"#82AA3C","alert_rank":"36","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand35;country35;0.36;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand36","country":"test36","product":"product36","kpi":"kpi36","curr_value":"576319.88","prev_value":"767588.51","deviation":"0.34","alert_color":"#DB2E2E","alert_rank":"37","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand36;country36;0.34;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand37","country":"test37","product":"product37","kpi":"kpi37","curr_value":"554011.46","prev_value":"717847.46","deviation":"0.33","alert_color":"#DB2E2E","alert_rank":"38","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand37;country37;0.33;of Total;NGR"},{"alert_date":"2018-03-09T18:30:00.000Z","brand":"brand38","country":"test38","product":"product38","kpi":"kpi38","curr_value":"543732.38","prev_value":"602107.85","deviation":"0.32","alert_color":"#9E9E9E","alert_rank":"39","created_ts":"2018-03-15T06:33:30.757Z","display_txt":"brand38;country38;0.32;of Total;NGR"}]
    this.nLevels = 8;
    this.d3Digest(this.el.nativeElement);
  }

  cal_lvl(data_length: number): number {
    var res = 0
    for (var i = 1; res < data_length; i++) {
      res = 0;
      var range = d3.range(1, (i - 1) / 2 + 1)

      var tmp = 0;
      for (var t of range) {
        tmp = tmp + (i - t);
      }
      //console.log('tmp',tmp);
      res = res + (i) + 2 * tmp;
    }
  //  console.log("levels", i - 1);
    return i - 1;
  }


  d3Digest(ele) {

    let svg = this.el;
  
    d3.select(ele)
    .attr("width", '100%')
    .attr("height", '100vh')
	.attr("style","margin-left: -110px;")
	  .append('g')
      .attr('id', 'interval-legend')
      .attr('transform', `translate(${window.innerWidth},${window.innerHeight - this.topMargin})`)

    let vm = this;
    const transitionTime = 900,
      hexPath = this.getPolygonPath(this.hexR, no_of_sides, Math.PI / 2)
    let gain, oscillator

    let hexs = d3.select(ele)
      .selectAll('.hex')
      .data(this.genHexList(this.hexR, [window.innerWidth / 2, (window.innerHeight - this.topMargin) / 2.2], this.nLevels), d => d.id);
    hexs.exit().transition().duration(transitionTime)
      // Shrink and fade-out
      .attr('transform', d => `translate(${d.x},${d.y}) scale(0)`)
      .style('opacity', 0)
      .remove()
    // New hexs
    const newHexs = hexs.enter().append('g')
      .attr('class', 'hex')
      .attr('transform', d => `translate(${d.x},${d.y}) scale(0)`) // Scale/fade-in new hexs
      .style('opacity', 0)
      .on("click", (d) => {
      //  console.log('click dddddddddddddd', d);
       // if (this.router.url.split(';')[0] !== '/Hexagonal') {
        vm.router.navigate(['/charts', { queryParams:''+d.brand+'#'+d.id, skipLocationChange: true }]);
  
       // }
        //  else {
        //   vm.router.navigate(['/Hexagonal_child', { queryParams: d, skipLocationChange: true }]);
        // }

      })

    newHexs.append('path')
      .attr('d', hexPath)
      .style('fill', function (d, i) {
        return d.alert_color;
    
      })
      .attr('filter', 'url(#f3)')

    newHexs.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '-3em')
      .text(function (d) {
        return d.display_txt.split(';')[0];
      })
      .style("font-size", this.hexR / 6)

    newHexs.append('text')
    .attr('text-anchor', 'middle')
    .attr('dy', '-2em')
    .text(function (d) {
      return d.display_txt.split(';')[1];
    })
    .style("font-size", this.hexR / 6)

    newHexs.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '0.3em')
      .text(function (d) {
        return d.display_txt.split(';')[2];
      })
       .style("font-size", 32)

      newHexs.append('text')
      .attr('text-anchor', 'middle')
      .attr('dy', '3em')
      .text(function (d) {        
       return d.display_txt.split(';')[3]+' '+d.display_txt.split(';')[4]; 
      })
      .style("font-size", this.hexR / 8)
      .style("font-style", 'italic')

      // .style("font-size", this.hexR / 6)
      // newHexs.append('text')
      // .attr('text-anchor', 'middle')
      // .attr('dy', '2.5em')
      // .text(function (d) {
      //   return d.display_txt.split(';')[4];
      // })
      // .style("font-size", this.hexR / 6)

    newHexs
      .on('mouseenter', function (d) {
        var up_val = vm.getPolygonPath(vm.hexR + 60, no_of_sides, Math.PI / 2);
        svg.nativeElement.appendChild(this);
        $(this).find('path').each((i, e) => {
          $(e).attr('d', up_val);
        });
        $(this).find('text').each((i,e)=>{
          $(e).css('font-size',parseFloat($(e).css('font-size'))+8)
      });

      })
      .on('mouseleave', function () {
        d3.select(this).classed('highlight', false)
        var up_val = vm.getPolygonPath(vm.hexR, no_of_sides, Math.PI / 2);
        $(this).find('path').each((i, e) => {
          $(e).attr('d', up_val);
        });
        $(this).find('text').each((i,e)=>{
          $(e).css('font-size',parseFloat($(e).css('font-size'))-8)
      });
      })

    // Update all
   // console.log('hexa!!!!', hexs)
    hexs.merge(newHexs).transition().duration(transitionTime)
      .attr('transform', d => `translate(${d.x},${d.y})`)
      .style('opacity', 1)
  }

  genHexList(r, centerXy, levels) {
    levels += (levels % 2) ? 0 : 1
    var leftXy = centerXy
    leftXy[0] -= (levels - 1) * r;
    // Central row
    let hexs = this.buildRow(r, leftXy, levels)
    d3.range(1, (levels - 1) / 2 + 1).forEach(i => {
     // console.log("i", i);
      const offset = [i * r * 2 * Math.cos(Math.PI / 3), i * r * 2 * Math.sin(Math.PI / 3)]
      hexs.push(
        // Up-right
        ...this.buildRow(r, [leftXy[0] + offset[0], leftXy[1] - offset[1]], levels - i),
        // Down-right
        ...this.buildRow(r, [leftXy[0] + offset[0], leftXy[1] + offset[1]], levels - i)
      )
    })


    // var color = [{ color: '#4985e5' }, { color: '#f70425' }, { color: '#78c5db' }, { color: '#c36cd1' }, { color: '#89ad58' },
    // { color: '#d86965' }, { color: '#7978db' }, { color: '#f70425' }, { color: '#78c5db' }, { color: '#c36cd1' },
    // { color: '#89ad58' }, { color: '#d86965' }, { color: '#7978db' }, { color: '#f70425' }, { color: '#78c5db' },
    // { color: '#c36cd1' }, { color: '#89ad58' }, { color: '#d86965' }, { color: '#7978db' }, { color: '#f70425' },
    // { color: '#78c5db' }, { color: '#c36cd1' }, { color: '#89ad58' }, { color: '#d86965' }, { color: '#7978db' },
    // { color: '#f70425' }, { color: '#78c5db' }, { color: '#c36cd1' }, { color: '#89ad58' }, { color: '#d86965' },
    // { color: '#7978db' }, { color: '#f70425' }, { color: '#78c5db' }, { color: '#c36cd1' }, { color: '#89ad58' },
    // { color: '#d86965' }, { color: '#7978db' }]

    let temp = [];
    for (let r = 0; r < this.data.length; r++) {
      hexs[r].brand = this.data[r].brand;
      hexs[r].alert_color =this.data[r].alert_color;
      hexs[r].id = this.data[r].country;
      hexs[r].curr_value = this.data[r].curr_value;
      hexs[r].deviation = this.data[r].deviation;
      hexs[r].display_txt = this.data[r].display_txt;
      hexs[r].kpi = this.data[r].kpi;
      hexs[r].prev_value = this.data[r].prev_value;
      hexs[r].product = this.data[r].product;
      
      temp.push(hexs[r])
    }
    return temp;
  }

  buildRow(r, xy, levels) {
    const hexs = []
    let carryX = xy[0]
    while (levels) {
      hexs.push({
        x: carryX,
        y: xy[1],
        name: 'test'
      })
      carryX += r * 2
      levels--
    }

    return hexs
  }
  getPolygonPath(r, nSides, startAngle) {
    let d = ''
    d3.range(nSides).map(side => {
      const angle = startAngle + 2 * Math.PI * side / nSides
      return [r * Math.cos(angle), r * Math.sin(angle)]
    }).forEach(pt => {
      d += (d.length ? 'L' : 'M') + pt.join(',')
    })

    return d + 'Z'
  }


}
