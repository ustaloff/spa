<?php

namespace App\Http\Controllers;

use Symfony\Component\Console\Output\ConsoleOutput;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Query\JoinClause;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Location;
use App\Models\Item;
use App\Models\User;
use App\Models\Service;
use DB;

class BaseController extends Controller
{
    /**
     * Constructor instance.
     *
     * @return void
     */
    public function __construct()
    {
        //$this->middleware('auth');
    }

    /**
     * Get Data
     *
     * @return array
     */
    public function getBaseData(): array
    {
        $output = new ConsoleOutput();
        $output->writeln('Converting  of 50000');

        return Service::with('types')
            ->get()
            ->toArray();
    }

    /**
     * Get Items
     *
     * @param Request $request
     * @return array|string
     */
    public function getItems(Request $request): array|string
    {
        $service = $request->get('service');

        if ($service) {
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
