import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useCheckin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutate: checkin, isLoading: isCheckingIn } = useMutation({
    mutationFn: ({ bookingId, breakfast }) =>
      updateBooking(bookingId, {
        status: "checked-in",
        isPaid: true,
        ...breakfast,
      }),
    onSuccess: (data) => {
      //data приходить з mutationFn =>updateBooking
      toast.success(`Booking #${data.id} successfully checked in`);
      queryClient.invalidateQueries({
        active: true,
        //Оновити запити всіх дійсних сторінок
      });
      navigate("/");
    },
    onError: (err) => toast.error(err.message),
  });

  return { checkin, isCheckingIn };
}
