<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Query\JoinClause;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Models\Location;
use App\Models\Item;
use App\Models\User;
use App\Models\Service;
use DB;
use Auth;
use Symfony\Component\Console\Output\ConsoleOutput;

class ProfileController extends Controller
{
    /**
     * Constructor instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Get Data
     *
     * @return array
     */
    public function getBaseData(): array
    {
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
        //$output = new ConsoleOutput();
        //$output->writeln('id: ' . Auth::user()->id);
        $userId = Auth::user()->id;

        return Item::with('currency', 'vendor:name,id', 'service', 'type')
            ->join('users', function (JoinClause $join) use ($userId) {
                $join->on('items.uid', '=', 'users.id')
                    ->where('users.id', '=', $userId);
            })
            ->get(['items.*'])
            ->toArray();
    }
}
