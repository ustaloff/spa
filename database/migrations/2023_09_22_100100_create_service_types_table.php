<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('service_types', function (Blueprint $table) {
            $table->unsignedBigInteger('sid');
            $table->unsignedBigInteger('tid');

            $table->foreign('sid')->references('id')->on('services')->onDelete('cascade');
            $table->foreign('tid')->references('id')->on('types')->onDelete('cascade');
            $table->unique(['sid', 'tid']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('service_types');
    }
};
