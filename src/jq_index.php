<?php
require_once $_SERVER['DOCUMENT_ROOT'] . '/../include/engine/main.incl.php';
global $WEBC;
webc_start();
$WEBC['doc_jq'] = 1;

$btime = hotelland_timestamp_from_format($_REQUEST['btime'], $WEBC['webc_dateformat']);
$etime = hotelland_timestamp_from_format($_REQUEST['etime'], $WEBC['webc_dateformat']);

$WEBC['svc_btime'] = $btime = strtotime('14:00', ($btime ? $btime : time()));
if ($btime < time()) $WEBC['svc_btime'] = $btime = strtotime('+ 1 days');
$WEBC['svc_etime'] = $etime = strtotime('12:00', ($etime <= $btime ? $btime + 24 * 60 * 60 : $etime));

$WEBC['svc_adults'] = @intval($_REQUEST['adults']) > 0 ? @intval($_REQUEST['adults']) : 1;
$WEBC['svc_children_f0-t4'] = @intval($_REQUEST['children_f0-t4']) > 0 ? @intval($_REQUEST['children_f0-t4']) : 0;
$WEBC['svc_children_f4-t12'] = @intval($_REQUEST['children_f4-t12']) > 0 ? @intval($_REQUEST['children_f4-t12']) : 0;
$WEBC['svc_children_f12-t18'] = @intval($_REQUEST['children_f12-t18']) > 0 ? @intval($_REQUEST['children_f12-t18']) : 0;
$WEBC['svc_children'] = $WEBC['svc_children_f0-t4'] + $WEBC['svc_children_f4-t12'] + $WEBC['svc_children_f12-t18'];

global $WEBC;

switch ($action) {
    case 'getHotels':
        $bid = $_SESSION['svc_bid'];
        break;

    case 'getCategories':
        $lhid = intval($_REQUEST['lhid']);
        $rcid = intval($_REQUEST['rcid']);

        $response = hotelland_hostrequest('getCategories', array('lhid' => $lhid, 'rcid' => $rcid,
            'btime' => $WEBC['svc_btime'], 'etime' => $WEBC['svc_etime'], 'adults' => $WEBC['svc_adults'], 'children' => $WEBC['svc_children']));
        $WEBC['hotel_roomclasses'] = $response;
        header("Content-Type: application/json;charset=utf-8");
        print @json_encode($WEBC['hotel_roomclasses'], true);
        exit;
        break;

    case 'gettoken':
        print @json_encode(array('bookhost' => $WEBC['webc_bookhost'], 'tplid' => $WEBC['webc_tplid'], 'ip' => $_SERVER['SERVER_ADDR']));
        break;
}