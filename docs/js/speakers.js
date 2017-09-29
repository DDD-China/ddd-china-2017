$(function () {
    $('.speaker-info .speaker-img img').attr('src', speaker['speaker-img']).attr('alt', speaker['speaker-name']);
    $('.speaker-info .speaker-detail .speaker-detail-introduction .content').append(speaker['speaker-introduction']);
    $('.speaker-info .speaker-detail .speaker-detail-topic .content').append(speaker['speaker-topic']);
    $('.speaker-info .speaker-detail .speaker-detail-outline .content').append(speaker['speaker-outline']);
})