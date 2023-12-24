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
        Schema::create('items', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->longText('description');
            $table->longText('information');
            $table->longText('instruction');
            $table->json('image');
            $table->json('source');
            $table->float('amount', 8, 2);
            $table->timestamps();
            $table->unsignedBigInteger('uid');
            $table->unsignedBigInteger('sid');
            $table->unsignedBigInteger('tid');
            $table->unsignedBigInteger('cid');

            $table->foreign('uid')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('sid')->references('id')->on('services')->onDelete('cascade');
            $table->foreign('tid')->references('id')->on('types')->onDelete('cascade');
            $table->foreign('cid')->references('id')->on('currencies')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('items');
    }
};
