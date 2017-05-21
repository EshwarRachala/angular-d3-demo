import { Routes } from '@angular/router';

import { LineBarChartComponent } from './components/Line-bar/line-bar.component';
import { PieChartComponent } from './components/pie-chart/pie.component';
import { CumulativeLineComponent } from './components/cumulative-line/cumulative-line.component';
import { StackedAreaComponent } from './components/stacked-area/stackedarea.component';
import { SimpleLineChartComponent } from './components/simple-line/simpleline.component';
import { DiscreteBarChartComponent } from './components/discrete-bar-chart/discrete-bar-chart.component';
import { BulletChartComponent } from './components/bullet-chart/bullet-chart.component';
import { VerMultiBarChartComponent } from './components/ver-mul-bar/vmb.component';
import { HorMultiBarChartComponent } from './components/hor-multi-bar/hmb.component';
import { StackedGroupedMultiBarComponent } from './components/stacked-grouped-multi-bar/stacked-grouped-multi-bar';
import { LineViewFinderChartComponent } from './components/LineView/lineview.component';
import {ScatteredBubbleChartComponent} from './components/scattered-bubble/scattered-bubble.component';
import { CandleStickChartComponent } from './components/candleStick/candle-stick.component';
import {BoxPlotComponent} from './components/boxplot/boxplot.component';
import { OhlcChartComponent} from './components/Ohlc/ohlc.component';
import {SunBurstComponent} from './components/Sunburst/sunburst.componet';

import {ForceComponent} from './components/force/force.component';

export const ROUTES: Routes =
  [
    { path: '', component: VerMultiBarChartComponent },
    { path: 'VerMutltiBar', component: VerMultiBarChartComponent },
    { path: 'HorMultiBar', component: HorMultiBarChartComponent },
    { path: 'DiscreteBar', component: DiscreteBarChartComponent },
    { path: 'bulletchart', component: BulletChartComponent },
    { path: 'stackgroupedmultibar', component: StackedGroupedMultiBarComponent },
    { path: 'stackedarea', component: StackedAreaComponent },
    { path: 'SimpleLine', component: SimpleLineChartComponent },
    { path: 'viewfinder', component: LineViewFinderChartComponent },
    { path: 'cumulativeline', component: CumulativeLineComponent },
    { path: 'linebar', component: LineBarChartComponent },
    { path: 'pie', component: PieChartComponent },
    { path: 'scatteredbbl', component: ScatteredBubbleChartComponent },
    { path: 'candlestick', component: CandleStickChartComponent },
    { path: 'boxplot', component: BoxPlotComponent },
    { path: 'force', component: ForceComponent },
    { path: 'Sunburst', component: SunBurstComponent },
    { path: 'Ohlc', component: OhlcChartComponent },
    { path: '*', component: VerMultiBarChartComponent }
  ];

