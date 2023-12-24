<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Query\JoinClause;
use Illuminate\Http\Request;
use App\Models\Location;
use App\Models\Item;
use App\Models\User;
use App\Models\Service;
use DB;
use PhpParser\Node\Expr\Array_;
use PhpParser\Node\Expr\Cast\Object_;
use PhpParser\Node\Scalar\String_;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('home');
    }

    public function index2()
    {
        $markers = Location::all()->toArray();
        return array_reverse($markers);
    }

    public function index3()
    {
        /*
         * $lat = YOUR_CURRENT_LATTITUDE;
        $lon = YOUR_CURRENT_LONGITUDE;

        3959 - miles
        6371 - km

        Note 1: to search by KM instead of Mile, replace `3959` with `6371`.
        https://alikhallad.com/how-to-find-closest-locations-using-coordinates-with-sql/
        https://stackoverflow.com/questions/2234204/find-nearest-latitude-longitude-with-an-sql-query
        https://www.tutsmake.com/laravel-9-vue-js-crud-example-tutorial/
        */
        $lat = 37;
        $lng = -122;

        return Location::select("locations.id"
            , DB::raw("3959 * acos(cos(radians(" . $lat . "))
                        * cos(radians(locations.lat))
                        * cos(radians(locations.lng) - radians(" . $lng . "))
                        + sin(radians(" . $lat . "))
                        * sin(radians(locations.lat))) AS distance"))
            //->groupBy("markers.id")
            ->having('distance', '<', 28)
            ->orderBy('distance')
            ->offset(0)
            ->limit(10)
            ->get();
    }

    public function index4()
    {
        return Service::with('types')->get();

        return User::with('items.currency', 'items.vendor', 'items.service', 'items.type')->get();

        return Item::with('currency', 'vendor:name,id', 'service', 'type')->get();
    }

    public function getData(): object
    {
        return Service::with('types')->get();
    }

    public function getItems(Request $request): array|string
    {

        //google search: translate api free codepen, example see below
        //https://codepen.io/junior-abd-almaged/pen/gQEbRv

        //var_dump(env('_ENV_GOOGLE_TRANSLATE_URL'));
        //$url = config('google_translate_url');


        //die('ok'.$url);

        //$json = file_get_contents('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ar&dt=t&q=<p>test</p>');
        //$obj = json_decode($json);

        //echo $obj[0][0][0];

        //die();

        $service = $request->get('service');

        if ($service) {
            /*return Item::with('currency', 'vendor:name,id', 'service', 'type')
                ->join('services', function (JoinClause $join) use ($service) {
                    $join->on('items.sid', '=', 'services.id')
                        ->where('services.name', '=', $service);
                })
                ->toSql();*/

            return Item::with('currency', 'vendor:name,id', 'service', 'type')
                ->join('services', function (JoinClause $join) use ($service) {
                    $join->on('items.sid', '=', 'services.id')
                        ->where('services.name', '=', $service);
                })
                ->get(['items.*'])
                ->toArray();
        }


        return Item::with('currency', 'vendor:name,id', 'service', 'type')
            ->get()
            ->toArray();
    }
}
