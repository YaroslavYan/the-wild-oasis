import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateBooking } from "../../services/apiBookings";
import toast from "react-hot-toast";

export function useCheckout() {
  const queryClient = useQueryClient();

  const { mutate: checkout, isLoading: isCheckingOut } = useMutation({
    mutationFn: (bookingId) =>
      updateBooking(bookingId, {
        status: "checked-out",
      }),
    onSuccess: (data) => {
      //data приходить з mutationFn =>updateBooking
      toast.success(`Booking #${data.id} successfully checked out`);
      queryClient.invalidateQueries({
        active: true,
        //Оновити запити всіх дійсних сторінок
      });
    },
    onError: (err) => toast.error(err.message),
  });

  return { checkout, isCheckingOut };
}
