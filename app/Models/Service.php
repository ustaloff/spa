<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;

class Service extends Model
{
    use HasFactory;

    public function types(): BelongsToMany
    {
        return $this->belongsToMany(Type::class, 'service_types', 'sid', 'tid', 'id', 'id');
    }
}
